<template>
  <div class="container text-center">
    <h2>Contact</h2>
    <div class="row justify-content-center align-items-center ">

      <b-form @submit.stop.prevent="onSubmit" class="espace">
        <b-form-group>

          <b-form-input
              v-model="name"
              type="texte"
              placeholder="Prénom">

          </b-form-input>
        </b-form-group>



        <b-form-group>

          <b-form-input
              v-model="$v.form.email.$model"
              :state="validateState('email')"
              type="email"
              placeholder="Adresse email"
          ></b-form-input>

          <b-form-invalid-feedback v-if="!$v.form.email.minLength"
          >Il te faut au moins 3 caractères !</b-form-invalid-feedback>

          <b-form-invalid-feedback v-if="!$v.form.email.required">
            Adresse email requis !
          </b-form-invalid-feedback>
        </b-form-group>


        <b-form-group>
          <b-form-textarea
              v-model="$v.form.msg.$model"
              :state="validateState('msg')"
              placeholder="Message"
              rows="3"
              max-rows="6"
          ></b-form-textarea>

          <b-form-invalid-feedback v-if="!$v.form.msg.required">
            Message requis !
          </b-form-invalid-feedback>

        </b-form-group>



        <b-button type="submit">Envoyer</b-button>

      </b-form>

    </div>

    <GoogleMap class="espace"></GoogleMap>
  </div>
</template>

<script>
import { validationMixin, } from "vuelidate";
import { required, minLength, } from "vuelidate/lib/validators";
import GoogleMap from "@/components/GoogleMap";

export default {
  components: {
    GoogleMap,
  },
  data() {
    return {
      form: {
        name: '',
        email: null,
        msg: '',
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
      },
      msg: {
        required,
      },
    },
  },
  methods: {

    updateMessage(e) {
      this.$store.commit('updateMessage', e.target.value)
    },

    validateState (form) {
      const {$dirty, $error} = this.$v.form[form];
      return $dirty ? !$error : null;
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


</style>

