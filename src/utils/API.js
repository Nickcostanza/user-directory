import axios from "axios";

// API call to random user to get 15 people
export default {
  findPeople: function() {
      return axios.get('https://randomuser.me/api/?results=100&nat=us');
  }
}