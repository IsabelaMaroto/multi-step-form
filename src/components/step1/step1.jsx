export function Step1(){
    return(
        <div>
            <h2>Personal info</h2>
            <p>Please provide your name, email address, and phone number.</p>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" placeholder="e.g. Stephen King"></input>
                </div>
                <div>
                    <label>Email Address</label>
                    <input type="email" placeholder="e.g. stephenking@lorem.com"></input>
                </div>
                <div>
                    <label> Phone Number</label>
                    <input type="tel" placeholder="e.g. +1 234 567 890"></input>
                </div>
            </form>
        </div>
    )
}