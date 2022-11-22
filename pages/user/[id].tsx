import { useRouter } from 'next/router'
import TextField from '@mui/material/TextField';

const DetailUser = ()=> {
    const router = useRouter()
    const { id } = router.query
    
    return (
       <div>
        <div className="image">
           <img src="" alt="" />
        </div>
        <div>
         <form>
            <div>
                <div>  
                    <p>Email</p>
                    <TextField/>
                </div>
                <div>  
                    <p>Address</p>
                    <TextField/>
                </div>
                <div>  
                    <p>Wallet</p>
                    <TextField/>
                </div>
            </div>
         </form>
        </div>
       </div>
    )
}

export default DetailUser