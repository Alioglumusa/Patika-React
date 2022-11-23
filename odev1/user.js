import axios from "axios";

 export default  async  (Number) => {
    const {data: res} = await axios (
        `https://jsonplaceholder.typicode.com/users/${Number}`
    )
    const {data: res1} = await axios (
        `https://jsonplaceholder.typicode.com/posts?id=${Number}`
    )
    console.log("res",res);
    console.log("res1",res1);
}


