import '../style/ContactForm.style.css'
import {useState} from "react";
import LoadingSpin from "react-loading-spin";
import '../dictionary/i18next';

const initialData = {
    first_name: '',
    last_name: '',
    phone_number: '',
    email: ['']
};



const ContactForm = (props) => {

    const {t} = props

    // hooks
    const [success, setSuccess] = useState(false);
    const [spin, setSpin] = useState(false);
    const [formData, setFormData] = useState(initialData);


    // 'onChange' in every input
    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };


    //add new e-mail
    const handleAddNewEmail = () => {
        setFormData((prevState) => ({ ...prevState, email: [...prevState.email, ''] }));
    }

    // 'onChange' in e-mail input
    const handleEmailChange = (event, index) => {
        const newEmails = [...formData.email];
        newEmails[index] = event.target.value;
        setFormData((prevState) => ({ ...prevState, email: newEmails }));
    };

    //submit form to API
    const handleSubmit = (event) => {
        event.preventDefault();
        const { first_name, last_name, phone_number, email} = formData;
        setSpin(true)
        email.forEach((email) => {

            const data = { first_name, last_name, phone_number, email };
            console.log(data)

            fetch('https://stern-test.ottoworkforce.pl/stern/api/users/register',
                {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers:{'Authorization' : 'Basic' + btoa('crm' + ':' + 'Q5Ue7-Z7253-s1A26-2qPR4-Fb1qX')}

                })


                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Błąd');
                    }
                    return response.json();
                })
                .then((responseData) => {
                    setSpin(false)
                    setSuccess(true)
                })
                .catch((error) => {
                    setSpin(false)
                    alert('Błąd połączenia z serwerem')
                });

        })

        };

    //clear inputs
    const handleResetForm = () => {
        setFormData({first_name: '', last_name: '', phone_number: '', email: Array('')})
    }


    // remove email
    const handleRemoveEmail = (index) => {

        const filterEmail = [...formData.email]
        filterEmail.splice(index, 1)
        setFormData((prev) => ({...prev, email: filterEmail}))
    }


    return (
                <>
                    {
                        success === false ?
                            <form onSubmit={handleSubmit}>
                                <div className={'signle-form-element'}>
                                    <h3>{t('Form.Title')}</h3>
                                    {/*<h3>WYPEŁNIJ FORMULARZ I ZBUDUJ SWOJĄ KARIERĘ W OTTO</h3>*/}

                                </div>

                                <div className={'signle-form-element'}>
                                    <label>{t('Form.Name')}</label>
                                    <input onChange={handleChangeInput}
                                           value={formData.first_name}
                                           type="text"
                                           title="Tylko litery"
                                           pattern="^([\u00c0-\u01ffa-zA-Z])+$"
                                           className="input-element-on-form"
                                           name="first_name"
                                           required
                                    />

                                </div>
                                <div className={'signle-form-element'}>
                                    <label>{t('Form.Second-name')}</label>
                                    <input onChange={handleChangeInput}
                                           value={formData.last_name}
                                           type="text"
                                           title="Tylko litery"
                                           pattern="^([\u00c0-\u01ffa-zA-Z])+$"
                                           className="input-element-on-form"
                                           name="last_name"
                                           required
                                    />
                                </div>
                                <div className="signle-form-element">
                                    <label htmlFor="">{t('Form.Phone-number')}</label>
                                    <input onChange={handleChangeInput}
                                           value={formData.phone_number}
                                           type="tel"
                                           title="Przykładowy format +48 123 123 123"
                                           pattern="^\+?\d{1,3}[\s.-]?\d{2,3}[\s.-]?\d{2,3}[\s.-]?\d{2,3}$"
                                           className="input-element-on-form"
                                           name="phone_number"
                                           required
                                    />
                                </div>


                                {formData.email.map((email, index) => (
                                    <div className="signle-form-element" key={index}>


                                        <label htmlFor="">{t('Form.Adres-e-mail')} {index + 1}</label>

                                        <div className={'main-email-container'}>
                                            {/*if email lenght is >1 then create full size input without trash element*/}
                                            {formData.email.length > 1 ?
                                                <div className={'email-container'}>
                                                    <input onChange={(event) => handleEmailChange(event, index)}
                                                           value={email}
                                                           type="email"
                                                           title="Przykładowy format example@gmail.com"
                                                           pattern="[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                                                           className="input-element-on-form"
                                                           name="email"
                                                           required
                                                    />
                                                </div>
                                                :
                                                <div className={'email-container-full-view'}>
                                                    <input onChange={(event) => handleEmailChange(event, index)}
                                                           value={email}
                                                           type="email"
                                                           title="Przykładowy format example@gmail.com"
                                                           pattern="[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                                                           className="input-element-on-form"
                                                           name="email"
                                                           required
                                                    />
                                                </div>
                                            }
                                            {formData.email.length >1 && (
                                            <div className={'trash-container'} onClick={() => handleRemoveEmail(index)}>
                                                <img className={'trash-button'} src={'https://cdn-icons-png.flaticon.com/512/10105/10105636.png'}/>
                                            </div>
                                                )}

                                        </div>


                                    </div>
                                ))}


                                <button className="add-next-email-button" name="" onClick={handleAddNewEmail}>{t('Form.Add-next-email')}
                                </button>

                                {spin === true ?
                                    <div className="box-for-send-button">
                                        <LoadingSpin primaryColor={'#96C2E9'}/>
                                    </div>
                                    :
                                    <div className="box-for-send-button">
                                    <button className="send-button" name="" type="submit">{t('Form.Send')}</button>
                                    <button className="clear-button" name="" type="reset" onClick={handleResetForm}>{t('Form.Clear')}</button>
                                    </div>
                                }

                            </form>
                            :
                            <form>
                                <h3 className="text-in-the-form-thank-you">{t("Form.Thank-you")}</h3>
                                <h3 className="text-in-the-form-for-the-submitted-application">{t("Form.§For-sent-application")}</h3>
                                <h3 className="text-in-the-form-we-will-contact-you-soon">{t("Form.We-will-contact-you-soon")}</h3>

                                <button type="submit" className="button-back-to-form" onClick={() => setSuccess(false)}>
                                    {t("Form.Back-to-form")}
                                </button>
                            </form>
                    }
                </>


    )
}


export default ContactForm;
