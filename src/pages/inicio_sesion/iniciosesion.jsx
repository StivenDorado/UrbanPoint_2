import React from 'react';


const Iniciosesion = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Sign in to your account</h1>
        <div className="flex gap-4">
          <img src="../../../public/facebook.png" width="100" height="100" alt="Image 1" className="rounded-lg" />
          <img src="/placeholder.svg" width="100" height="100" alt="Image 2" className="rounded-lg" />
          <img src="/placeholder.svg" width="100" height="100" alt="Image 3" className="rounded-lg" />
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="email">Email</label><br />
            <input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div>
            <label htmlFor="password">Password</label><br />
            <input id="password" type="password" />
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <a href="#" className="underline">
              Forgot your password?
            </a>
          </div>
          <button className="w-full">Sign in</button>
        </form>
        <div className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <a href="#" className="underline">
            Register
          </a>
        </div>
      </div>
    </div>
  );
}
export default Iniciosesion;
