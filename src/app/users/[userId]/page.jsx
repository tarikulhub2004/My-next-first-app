
const UsersDetails = async({params}) => {
    const {userId} = await params;
    const res =await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();
    return (
        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    );
};

export default UsersDetails;