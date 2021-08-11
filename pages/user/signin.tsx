import AppUserLayout from '../../components/user/AppUserLayout';
import FacebookOAuthSignin from '../../components/auth/FacebookOAuthBtn';
import GoogleOAuthSignin from '../../components/auth/GoogleOAuthBtn';
import SigninProcess from '../../components/user/SigninProcess';

const Signin = () => (
    <AppUserLayout>
        <>
            <SigninProcess />
            <GoogleOAuthSignin />
            <FacebookOAuthSignin />
        </>
    </AppUserLayout>
);

export default Signin;
