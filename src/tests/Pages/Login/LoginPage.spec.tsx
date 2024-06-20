import "@testing-library/react"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import LoginPage from "../../../pages/Login/LoginPage"
import { BrowserRouter } from "react-router-dom";
import { doSignInWithEmailAndPassword, doSignInWithFacebook, doSignInWithGoogle } from "../../../firebase/auth";

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockedUsedNavigate,
 }));

 jest.mock("../../../firebase/auth");

describe("testing LoginPage", () => {
    beforeEach(() => {
        render(<BrowserRouter><LoginPage/></BrowserRouter>);
    })

    it("should render LoginPage", () => {
        expect(screen.getByText("Welcome back!")).toBeInTheDocument()
    })

    it("should handle email login", async () => {
        const emailInput = screen.getByLabelText("E-mail");
        const passwordInput = screen.getByLabelText("Password");
        const signInButton = screen.getByText("Sign In");
    
        fireEvent.change(emailInput, { target: { value: "test@example.com" } });
        fireEvent.change(passwordInput, { target: { value: "password123" } });
    
        fireEvent.click(signInButton);
    
        expect(doSignInWithEmailAndPassword).toHaveBeenCalledWith(
          "test@example.com",
          "password123"
        );
    
        await waitFor(() => expect(screen.getByText("Welcome back!")).toBeInTheDocument());
      });

      it("should handle Google login", async () => {
        const googleButton = screen.getByAltText("Sign In Google");
    
        fireEvent.click(googleButton);
    
        expect(doSignInWithGoogle).toHaveBeenCalled();
    
        await waitFor(() => expect(mockedUsedNavigate).toHaveBeenCalled());
      });

      it("should handle Facebook login", async () => {
        const facebookButton = screen.getByAltText("Sign In Facebook");
    
        fireEvent.click(facebookButton);
    
        expect(doSignInWithFacebook).toHaveBeenCalled();
    
        await waitFor(() => expect(mockedUsedNavigate).toHaveBeenCalled());
      });
})