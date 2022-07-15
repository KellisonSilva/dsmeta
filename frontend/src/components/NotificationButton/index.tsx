import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../Utils/request';
import './style.css'

type props = {
    saleId: number;

}

function handleClick(id : number) {
  axios(`${BASE_URL}/sales/${id}/notification`)
  .then(response => {
      console.log("Sucesso!!!");
  });
}
function NotificationButton({saleId} : props) {
    return(
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
        <img src={icon} alt="Notificar" />
      </div>
    )
 }
 
 export default NotificationButton