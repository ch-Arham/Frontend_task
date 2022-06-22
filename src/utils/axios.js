import axios from "axios";


export default axios.create({
    baseURL: "https://task-admin.herokuapp.com/",
});

// https://task-admin.herokuapp.com/
// http://localhost:5000/