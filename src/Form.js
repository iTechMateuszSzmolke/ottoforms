import './Form.css'
import {useState} from "react";
import LoadingSpin from "react-loading-spin";

const initialData = {
    first_name: '',
    last_name: '',
    phone_number: '',
    email: ['']
};


const Form = () => {

    const login = "crm"
    const passwd = "Q5Ue7-Z7253-s1A26-2qPR4-Fb1qX"

    const [success, setSuccess] = useState(false);
    const [spin, setSpin] = useState(false);
    const [formData, setFormData] = useState(initialData);



    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };


    const handleAddNewEmail = () => {
        setFormData((prevState) => ({ ...prevState, email: [...prevState.email, ''] }));
    }

    const handleEmailChange = (event, index) => {
        const newEmails = [...formData.email];
        newEmails[index] = event.target.value;
        setFormData((prevState) => ({ ...prevState, email: newEmails }));
    };

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

    return (
                <div>
                    {
                        success === false ?
                            <form onSubmit={handleSubmit}>
                                <div className={'form1'}>
                                    <h3>WYPEŁNIJ FORMULARZ I ZBUDUJ SWOJĄ KARIERĘ W OTTO</h3>

                                </div>

                                <div className={'form1'}>
                                    <label>Imię</label>
                                    <input onChange={handleChange}
                                           value={formData.first_name}
                                           type="text"
                                           title="Tylko litery"
                                           pattern="^([\u00c0-\u01ffa-zA-Z])+$"
                                           className="input1"
                                           name="first_name"
                                           required
                                    />
                                </div>
                                <div className={'form1'}>
                                    <label>Nazwisko</label>
                                    <input onChange={handleChange}
                                           value={formData.last_name}
                                           type="text"
                                           title="Tylko litery"
                                           pattern="^([\u00c0-\u01ffa-zA-Z])+$"
                                           className="input1"
                                           name="last_name"
                                           required
                                    />
                                </div>
                                <div className="form1">
                                    <label htmlFor="">Numer telefonu</label>
                                    <input onChange={handleChange}
                                           value={formData.phone_number}
                                           type="tel"
                                           title="Przykładowy format +48 123 123 123"
                                           pattern="^\+?\d{1,3}[\s.-]?\d{2,3}[\s.-]?\d{2,3}[\s.-]?\d{2,3}$"
                                           className="input1"
                                           name="phone_number"
                                           required
                                    />
                                </div>


                                {formData.email.map((email, index) => (
                                    <div className="form1" key={index}>
                                        <label htmlFor="">Adres e-mail numer {index + 1}</label>

                                        <input onChange={(event) => handleEmailChange(event, index)}
                                               value={email}
                                               type="email"
                                               title="Przykładowy format example@gmail.com"
                                               pattern="[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                                               className="input1"
                                               name="email"
                                               required
                                        />

                                    </div>
                                ))}


                                <button className="button4" name="" onClick={handleAddNewEmail}>Dodaj kolejny adres
                                    e-mail
                                </button>

                                {spin === true ?
                                    <div className="buttonbox">
                                        <LoadingSpin primaryColor={'#96C2E9'}/>
                                    </div>
                                    :
                                    <div className="buttonbox">
                                    <button className="button1" name="" type="submit">Wyślij</button>
                                    <button className="button2" type="reset" name="wyczysc">Wyczyść</button>
                                    </div>
                                }

                            </form>
                            :
                            <form>
                                <h3 className="thankyou1">DZIĘKUJEMY!</h3>
                                <h3 className="thankyou2">ZA WYSŁANĄ APLIKACJĘ</h3>
                                <h3 className="thankyou3">Skontaktujemy się wkrótce</h3>

                                <button type="submit" className="button3" onClick={() => setSuccess(false)}>powrót do
                                    formularza
                                </button>
                            </form>
                    }
                </div>


    )
}


export default Form;
