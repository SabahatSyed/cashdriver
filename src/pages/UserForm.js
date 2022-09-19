import "../styles/userForm.css";

const UserForm = (props) => {
  return (
    <div className="user-form">
      <form>
        <label for="name">Name</label>
        <input type="text" name="name" id="name"></input>
        <label for="email">Email</label>
        <input type="text" name="email" id="email"></input>
        <label for="address">Address</label>
        <input type="text" name="address" id="address"></input>
        <label for="contact-no">Contact No</label>
        <input type="text" name="contactNo" id="contact-no"></input>
        <label for="crypto-wallet-key">Crypto Wallet Key</label>
        <input
          type="text"
          name="cryptoWalletKey"
          id="crypto-wallet-key"
        ></input>
        <label for="password">Password</label>
        <input type="password" name="password" id="password"></input>
        <label for="confirm-password">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirm-password"
        ></input>
      </form>
      <button className="submit-btn" >Submit</button>
    </div>
  );
};

export default UserForm;
