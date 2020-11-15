import './App.css';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {FacebookLoginButton, GithubLoginButton, LinkedInLoginButton} from 'react-social-login-buttons';

function App() {
  return (
    <Form className="login-form">
      
      <h1 className="text-center mb-4">
        <span className="font-weight-bold">Login</span>
      </h1>

        <FormGroup>
            <Label>Email</Label>
            <Input type="email" placeholder="Email" />
        </FormGroup>

        <FormGroup>
            <Label>Password</Label>
            <Input type="password" placeholder="password" />
        </FormGroup>

        <Button className="btn-lg btn-dark btn-block">Log in</Button>
        <div className="text-center pt-3">
          Or continue with your social account
        </div>

        <LinkedInLoginButton className="mt-3 mb-3"></LinkedInLoginButton>

        <FacebookLoginButton className="mt-3 mb-3"></FacebookLoginButton>
        <GithubLoginButton className="mt-3 mb-3"></GithubLoginButton>

        

        <div className="text-center">
          <a href="/sigh-up">Sign up</a>
          <span className="p-2">|</span>
          <a href="/forgot-password">Forgot password</a>
          
        </div>
    </Form>
  );
}

export default App;
