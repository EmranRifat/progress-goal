import Link from 'next/link';
import React from 'react';

const users = ({users}) => {
    return (
        <div>
            <h2 >All users are here :{users.length}</h2>
{
    users.map(user=><div key={user.id}>

        <h5>Name :{user.name}  
        <Link href={`/users/${user.id}`}><button>Explore</button></Link>
         </h5>
    </div>)
}
            
        
        </div>
    );
};

export default users;
export async function getStaticProps(context) {
    const res= await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await res.json();
    // console.log(data);
    return {
      props: {users:data}, // will be passed to the page component as props
    }
  }