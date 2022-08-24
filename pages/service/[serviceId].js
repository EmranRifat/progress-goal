import { useRouter } from 'next/router';

function  ServiceDetail() {
    const router=useRouter();
    const productId=router.query.serviceId;
    return (
     <div>
            <h2>Details about product : {productId}</h2>
    </div>
    )
    
   
  
    
}

export default ServiceDetail