import axios from "axios";

export function useApi() {
  async function getBountys() {
    let res = {};
    try {
      res = await axios.get(`http://localhost:3000/api/bounty`);
    } catch (e) {
      console.log(e);
    }
    console.log(res);
    return res;
  }
  async function getAccount() {
    return "asdadasd";
  }
  return { getBountys };
}
