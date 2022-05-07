import React, { useState } from 'react'

function Singinform({
  onSubmit,
  user = { id: undefined, name: '', email: '', password: '' },
}) {
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState(user.password)
 

  function onFormSubmit(e) {
    e.preventDefault()

    onSubmit({
      id: user.id,
      name,
      email,
      password,
    })
  }

  return (
      <section class='contact container' id="contact">
      <h2 class='contact__title'>SINGUP</h2>
      <br/>
      <div>
    <form onSubmit={onFormSubmit} class='form'>
      <div class="form_field">
        <label class="form__label">Name: </label>
        <input class="form__input name"
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div class="form_field">
        <label class="form__label">Password: </label>
        <input class="form__input name"
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type='submit'>Wyslij</button>
      <a href='rejestracja.html'>Nie mam konta</a>

    </form>
    </div>
    </section>
  )
}

export default Singinform