import { Roboto } from "next/font/google";
import Link from "next/link";

export const metadata = {
    title: 'All Users',
    description: 'All the users information',
}

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})


const UsersPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users)
    return (
        <div className={roboto.className}>
            <h2>Users page coming here</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    users.map(user => <div key={user.id} user={user}>
                        <div className="card bg-info text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title">{user.name}</h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-end">
                                    <button className="btn"><Link href={`/users/${user.id}`}>User Details</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UsersPage;