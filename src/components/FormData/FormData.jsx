import React from 'react';
import css from './FormData.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export function FormData() {
  const dispatch = useDispatch();
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const handleChange = event => {
  //   const { name, value } = event.target;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'number':
  //       setNumber(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addContact(form.name.value, form.number.value));
    form.reset();
  };

  // const resetInput = () => {
  //   switch ({ name, number }) {
  //     case 'name':
  //       setName('');
  //       break;
  //     case 'number':
  //       setNumber('');
  //       break;
  //     default:
  //       return;
  //   }
  // };

  // const idName = nanoid();
  // const idNumber = nanoid();

  return (
    <>
      <h2 className={css.phonebook__title}>PHONEBOOK</h2>
      <div className={css.main__form}>
        <form onSubmit={handleSubmit}>
          <div className={css.input__form}>
            <label className={css.form__label}>Name</label>
            <input
              className={css.input__change}
              type="text"
              name="name"
              // id={idName}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <div className={css.input__form}>
            <label className={css.form__label}>Number</label>
            <input
              className={css.input__change}
              type="tel"
              name="number"
              // id={idNumber}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
          <div className={css.form__button}>
            <button className={css.submit__button} type="submit">
              Add contact
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
