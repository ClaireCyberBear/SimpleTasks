import axios from "axios";

componentDidMount();
{
  axios
    .get("http://localhost:5131/user")
    .then((response) => {
      this.setState({ users: response.data });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
