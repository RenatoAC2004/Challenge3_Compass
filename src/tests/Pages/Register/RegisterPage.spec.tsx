import "@testing-library/react"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import RegisterPage from "../../../pages/Register/RegisterPage"
import { BrowserRouter } from "react-router-dom";
import { doCreateUserWithEmailAndPassword, doSignInWithFacebook, doSignInWithGoogle } from "../../../firebase/auth";

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockedUsedNavigate,
 }));

 jest.mock("../../../firebase/auth");

describe("testing RegisterPage", () => {
    beforeEach(() => {
        render(<BrowserRouter><RegisterPage/></BrowserRouter>);
    })

    it("should render RegisterPage", () => {
        expect(screen.getByText("Create your account")).toBeInTheDocument();
    })

    it("should handle registration", async () => {
        const emailInput = screen.getByLabelText("E-mail");
        const passwordInput = screen.getByLabelText("Password");
        const confirmPasswordInput = screen.getByLabelText("Password confirmation");
        const signUpButton = screen.getByText("Sign Up");
    
        fireEvent.change(emailInput, { target: { value: "test@example.com" } });
        fireEvent.change(passwordInput, { target: { value: "password123" } });
        fireEvent.change(confirmPasswordInput, { target: { value: "password123" } });
    
        fireEvent.click(signUpButton);
    
        expect(doCreateUserWithEmailAndPassword).toHaveBeenCalledWith(
          "test@example.com",
          "password123"
        );
    
        await waitFor(() => expect(screen.getByText("Registration successful!")).toBeInTheDocument());
        fireEvent.click(screen.getByText("Proceed to home"));
        expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
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
