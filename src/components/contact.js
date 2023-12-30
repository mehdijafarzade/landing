import './contact.css'

const Contact = () => {
    return (
      <div className="contact-page-wrapper">
        <h1 className="primary-heading text-warning">سوالی دارید ؟</h1>
        <h1 className="primary-heading">اجازه دهید ما به شما کمک کنیم</h1>
        <div className="contact-form-container">
          <input type="text" placeholder="yourmail@gmail.com" />
          <button className="secondary-button">ارسال</button>
        </div>
      </div>
    );
  };
  
  export default Contact;