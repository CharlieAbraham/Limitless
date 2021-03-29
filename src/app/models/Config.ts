class Config {
  static saveUserDetails(data: any) {
    sessionStorage.setItem("id", data["id"])
    sessionStorage.setItem("name", data["username"])
    sessionStorage.setItem("email", data["email"])
    sessionStorage.setItem("token", data["accessToken"])
  }

  static getName () {
    return sessionStorage.getItem("name")
  }
  static getEmail () {
    return sessionStorage.getItem("email")
  }

  static getId () {
    return sessionStorage.getItem("id")
  }

  static getToken () {
    return sessionStorage.getItem("token")
  }

  static userIsAuthenticated() : boolean {
    return sessionStorage.getItem("id") !== null;
  }

  static clear() {
    sessionStorage.clear();
  }

}

export { Config }
