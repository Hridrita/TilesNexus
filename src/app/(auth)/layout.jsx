import NavBar from '@/components/NavBar';


const AuthLayout = ({children}) => {
    return (
        <div>
            <NavBar></NavBar>
            {children}
        </div>
    );
};

export default AuthLayout;