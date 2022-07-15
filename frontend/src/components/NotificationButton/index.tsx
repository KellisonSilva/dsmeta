import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../Utils/request';
import './style.css'

type props = {
    saleId: number;

}

function handleClick(id : number) {
  axios(`${BASE_URL}/sales/${id}/notification`)
  .then(response => {
      toast.info("SMS Enviado com Sucesso!!");
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