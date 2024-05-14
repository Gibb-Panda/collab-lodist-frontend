import React from "react";
import ButtonAppBar from "../../components/header/header";

export const SignUpPage: React.FC = () => {
    return (
        <>
            <ButtonAppBar></ButtonAppBar>
            <div style={{ backgroundColor: '#4597ff', minHeight: '100vh', padding: '20px' }}>
                <h1>SignUp page</h1>
            </div>
        </>
    );
};
