import axios from 'axios';

const link = () => {axios.create({
      baseURL : `http://localhost:3001/`
})}

export default link;