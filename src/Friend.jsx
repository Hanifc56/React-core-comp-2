export default function Friend(friend){
    const {email, name} = friend.friend;
    return(
        <div className="box">
            <h2>Name: {name} </h2>
            <p>Email: {email} </p>
        </div>
    )
}