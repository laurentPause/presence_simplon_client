<template>
  <div>
    <b-nav vertical class="text-light h-100 bg-light">
      <b-nav-item>
        <p v-b-toggle.fiche-side class="m-1">
          Fiche
        </p>
        <b-collapse id="fiche-side">
          <b-list-group>
            <b-list-group-item button>
              <nuxt-link to="/fiche">
                Voir les fiches
              </nuxt-link>
            </b-list-group-item>
            <b-list-group-item button>
              <nuxt-link to="/fiche/ajouter">
                Ajouter une fiche
              </nuxt-link>
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </b-nav-item>
      <b-nav-item>
        <p v-b-toggle.section-side class="m-1">
          Section
        </p>
        <b-collapse id="section-side">
          <b-list-group>
            <b-list-group-item button>
              <nuxt-link to="/section">
                Voir les sections
              </nuxt-link>
            </b-list-group-item>
            <b-list-group-item button>
              <nuxt-link to="/section/ajouter">
                Ajouter une section
              </nuxt-link>
            </b-list-group-item>
            <b-list-group-item button>
              <nuxt-link to="/section/associer">
                Associer
              </nuxt-link>
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </b-nav-item>
      <b-nav-item>
        <p v-b-toggle.formateur-side class="m-1">
          Formateur
        </p>
        <b-collapse id="formateur-side">
          <b-list-group>
            <b-list-group-item button>
              <nuxt-link to="/formateur">
                Voir les formateurs
              </nuxt-link>
            </b-list-group-item>
            <b-list-group-item button>
              <nuxt-link to="/formateur/ajouter">
                Ajouter une formateur
              </nuxt-link>
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </b-nav-item>
      <b-nav-item>
        <p v-b-toggle.apprenant-side class="m-1">
          Apprenant
        </p>
        <b-collapse id="apprenant-side">
          <b-list-group>
            <b-list-group-item button>
              <nuxt-link to="/apprenant">
                Voir les apprenants
              </nuxt-link>
            </b-list-group-item>
            <b-list-group-item button>
              <nuxt-link to="/apprenant/ajouter">
                Ajouter une apprenant
              </nuxt-link>
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </b-nav-item>
    </b-nav>
  </div>
</template>
