import './step1.css'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';

export function Step1(){
    return(
        <div>
            <h2>Personal info</h2>
            <p>Please provide your name, email address, and phone number.</p>
            <form>
                <div className='boxInput'>
                    <InputLabel>Name</InputLabel>
                    <TextField id="outlined-basic" type="text" placeholder="e.g. Stephen King"></TextField>
                </div>
                <div className='boxInput'>
                    <InputLabel>Email Address</InputLabel>
                    <TextField id="outlined-basic" type="email" placeholder="e.g. stephenking@lorem.com"></TextField>
                </div>
                <div className='boxInput'>
                    <InputLabel> Phone Number</InputLabel>
                    <TextField id="outlined-basic" type="tel" placeholder="e.g. +1 234 567 890"></TextField>
                </div>
            </form>
        </div>
    )
}