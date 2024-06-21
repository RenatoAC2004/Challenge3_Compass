import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import Footer from "../../components/Footer"

describe("Footer Component", () => {
  beforeEach(() => {
    render(
      <Router>
        <Footer />
      </Router>
    )
  })

  it("renders the company name", () => {
    expect(screen.getByText("Funiro.")).toBeInTheDocument()
  })

  it("renders social media links", () => {
    const facebookLink = screen.getByRole("link", { name: /facebook/i })
    expect(facebookLink).toHaveAttribute("href", "https://www.facebook.com/")

    const instagramLink = screen.getByRole("link", { name: /instagram/i })
    expect(instagramLink).toHaveAttribute("href", "https://www.instagram.com/")

    const twitterLink = screen.getByRole("link", { name: /twitter/i })
    expect(twitterLink).toHaveAttribute("href", "https://x.com/")

    const linkedinLink = screen.getByRole("link", { name: /linkedin/i })
    expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/")
  })

  it("renders navigation links", () => {
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /shop/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /contact/i })).toBeInTheDocument()
  })

  it("handles newsletter submission", async () => {
    const emailInput = screen.getByPlaceholderText("Enter Your Email Address")
    const submitButton = screen.getByText("SUBSCRIBE")

    fireEvent.change(emailInput, { target: { value: "test@example.com" } })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(localStorage.getItem("subscribedEmail")).toEqual(
        "test@example.com"
      )
      expect(
        screen.queryByText("Please enter a valid email address")
      ).not.toBeInTheDocument()
    })
  })

  it("displays error message", async () => {
    const emailInput = screen.getByPlaceholderText("Enter Your Email Address")
    const submitButton = screen.getByText("SUBSCRIBE")

    fireEvent.change(emailInput, {
      target: { value: "invalidemail@dawesaddaw" },
    })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(
        screen.getByText("Please enter a valid email address")
      ).toBeInTheDocument()
    })
  })

  it("displays the correct copyright text", () => {
    expect(
      screen.getByText(/2023 furino. All rights reverved/i)
    ).toBeInTheDocument()
  })
})
