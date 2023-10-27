<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
	setup () {
		const login_form = ref({});
		const register_form = ref({});
		const store = useStore();

		const login = () => {
			store.dispatch('login', login_form.value);
		}

		const register = () => {
			store.dispatch('register', register_form.value);
		}

       

		return {
			login_form,
			register_form,
			login,
			register,
            passwordError: ''

		}
	}
}

</script>

<template>
    <div>
        <h1>
            hello
            
        </h1>


<!-- Modal -->
<!-- Button trigger modal -->
<!-- Button trigger modal -->
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginRegisterModal">
    Launch demo modal
</button>

<!-- Modal -->
<div class="container">
<div class="modal fade" id="loginRegisterModal" tabindex="-1" aria-labelledby="loginRegisterModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg"> <!-- Centered and larger modal -->
        <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
                <h5 class="modal-title" id="loginRegisterModalLabel">Welcome </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <!-- Modal Body -->
            <div class="modal-body">
                <!-- Nav Tabs -->
                <ul class="nav nav-tabs justify-content-center nav-pills nav-fill" id="loginRegisterTabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="login-tab" data-bs-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="true">Login</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="register-tab" data-bs-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
                    </li>
                </ul>

                <!-- Tab Content -->
                <div class="tab-content mt-3" id="loginRegisterTabContent">
                    <!-- Login Tab Content -->
                    <div class="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                        <!-- Login Form -->
                        <form class="login" @submit.prevent="login" >
                            <div class="mb-3">
                                <label for="loginEmail" class="form-label">Email address</label>
                                <input required v-model="login_form.email"  type="email" class="form-control" id="loginEmail" placeholder="Enter email">
                            </div>
                            <div class="mb-3">
                                <label for="loginPassword" class="form-label">Password</label>
                                <input required v-model="login_form.password" type="password" class="form-control" id="loginPassword" placeholder="Password">
                            </div>
                            <button type="submit" value="login" class="btn btn-primary">Login</button>
                        </form>
                    </div>

                    <!-- Register Tab Content -->
                    <div class="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                        <!-- Registration Form -->
                        <form class="register" @submit.prevent="register">
                            <!-- <div class="mb-3">
                                <label for="registerName" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="registerName" placeholder="Full Name">
                            </div> -->
                            <div class="mb-3">
                                <label for="registerEmail" class="form-label">Email address</label>
                                <input required type="email" v-model="register_form.email" class="form-control" id="registerEmail" placeholder="Enter email">
                            </div>
                            <div class="mb-3">
                                <label for="registerPassword" class="form-label">Password</label>
                                <input type="password" required v-model="register_form.password" class="form-control" id="registerPassword" placeholder="Password">
                            </div>
                            <button type="submit" value="login" class="btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>
            </div>
            
            <!-- Modal Footer -->
            <!-- <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div> -->
        </div>
    </div>
</div>
</div>


    </div>
</template>



<style>

</style>