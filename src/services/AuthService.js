class AuthService {
    login(email, password) {
        if (
            email === "admin@gmail.com" &&
            password === "admin123"
        ) {

            localStorage.setItem("loggedInUser", email);
            return true;
        }
        return false;
    }

    logout() {
        localStorage.removeItem("loggedInUser");
    }

    isLoggedIn() {
        return localStorage.getItem("loggedInUser") !== null;
    }

    getUser() {
        return localStorage.getItem("loggedInUser");
    }
}

export default new AuthService();