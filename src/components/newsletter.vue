<template>
  <div class="container my-md-5 pt-md-5 ">
    <div class="row">
      <div class="col-md-6 ">
        <div>
          <img v-bind:src="require('@/assets/beer.png')" alt="service-image" />
        </div>
      </div>
      <div class="col-md-6 ">
        <h4>Pour être bourré quotidiennement</h4>
        <span>bourré d'annonce, ein !</span>
        <b-form @submit.stop.prevent="onSubmit" class="espace">
          <b-form-group>
            <b-form-input v-model="name" type="texte" placeholder="Prénom"></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-input
                v-model="$v.form.email.$model"
                :state="validateState('email')"
                placeholder="Email"
                type="email"
            ></b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.email.minLength"
            >Il te faut au moins 3 caractères !</b-form-invalid-feedback>
            <b-form-invalid-feedback v-if="!$v.form.email.required">
              Adresse email requis !
            </b-form-invalid-feedback>
          </b-form-group>
          <b-button type="submit">S'abonner</b-button>
          <b-button class="ml-2" @click="resetForm()">Recommancer </b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        email: null,
      }
    };
  },
  mounted() {
    if (localStorage.name) this.name = localStorage.name;
  },
  watch: {
    name(newName) {
      localStorage.name = newName;
    }
  },

  computed: {
    name: {
      get() {
        return this.$store.state.name
      },
      set(value) {
        this.$store.commit('updateMessage', value)
      }
    }
  },

  validations: {
    form: {
      email: {
        required,
        minLength: minLength(3)
      }
    }
  },
  methods: {
    updateMessage(e) {
      this.$store.commit('updateMessage', e.target.value)
    },



    validateState(email) {
      const {$dirty, $error} = this.$v.form[email];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        email: null,
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      alert("Form submitted!");
    },
  },
  mixins: [validationMixin],
}
</script>

<style scoped>
img {
  width: 75%;
}


</style>


