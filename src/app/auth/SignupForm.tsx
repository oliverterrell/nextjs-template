'use client';

export default function SignupForm() {
  // todo rework

  return (
    <form>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" placeholder="First Name" />
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" placeholder="Last Name" />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" placeholder="Email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
}
