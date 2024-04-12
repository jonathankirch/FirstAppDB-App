// Fazer login

async function handleSubmitLogin(e) {
	e.preventDefault()

	const formData = new FormData(e.target)
	const formProps = Object.fromEntries(formData)

	try {
		const res = await fetch('https://firstappdb-server.onrender.com/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formProps),
		})
		const data = await res.json()
		alert(data)
	} catch (error) {
		console.error('Erro ao entrar em contato com o servidor:', error)
	}
}

// Cadastrar usuário

async function handleSubmitCadastro(e) {
	e.preventDefault()

	const formData = new FormData(e.target)
	const formProps = Object.fromEntries(formData)

	if (formProps.password !== formProps.passwordConfirm) {
		return alert('Senhas digitadas não coincidem. Por favor tente novamente.')
	}

	try {
		const res = await fetch('https://firstappdb-server.onrender.com/cadastro', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formProps),
		})

		const data = await res.json()
		alert(data)
	} catch (error) {
		console.error('Erro ao entrar em contato com servidor:', error)
	}
}

// Recuperar todos usuários

async function getAllUsers() {
	try {
		const res = await fetch('https://firstappdb-server.onrender.com/users', {
			method: 'GET',
		})

		const data = await res.json()

		const listUsers = document.querySelector('#listaDeUsuarios')

		for (i = 0; i < data.length; i++) {
			listUsers.innerHTML += `<li class="list-group-item">${i + 1} - ${data[i].name} </li>`
		}
	} catch (error) {
		console.error('Erro ao recuperar os usuários!:', error)
		alert('Erro ao recuperar os usuários!')
	}
}


async function handleSubmitDeletar(e) {
  e.preventDefault()

	const formData = new FormData(e.target)
	const formProps = Object.fromEntries(formData)

	try {
		const res = await fetch('https://firstappdb-server.onrender.com/deletar', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formProps),
		})

		const data = await res.json()
		alert(data)


	} catch (error) {
		console.error('Erro ao entrar em contato com servidor:', error)
	}
}
