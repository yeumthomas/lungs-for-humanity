<template>
    <div container> 
        <Navbar/>
        <h1>Why is Rice University's ApolloBVM ventilator our best bet?</h1>
        <figure>
            <img :src="venti" class="venti"/>
            <figcaption>early prototype sketch @Claire Xu</figcaption>
        </figure>
        <h4>Unsustainable Situations</h4>
        <p>The country is currently facing a severe shortage of ventilators, a problem that is expected 
            to escalate as the virus continues to spread and peak in different states across the country. 
            The Society of Critical Care Medicine has projected that 960,000 Covid-19 patients in the U.S. 
            may need to be put on ventilators at one point, but the nation has only about 200,000 of these 
            machines (many of which are older models). The wide gap between supply and demand is already forcing 
            doctors to choose which patients they can try to save.</p>
        <h4>The Solution</h4>
        <p>The ApolloBVM could be a critical component in addressing this issue. While traditional ventilators cost 
            between $25,000 to $50,000 each and weigh hundreds of pounds, the ApolloBVM could be mass produced for 
            less than $250 and weighs 8 pounds. Since it has 80% of the functionality of a full-size ventilator, it 
            could be used for the less severely ill. It is also automated, replacing manual pumping which is tiring 
            and risky for medical professionals.</p>

    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
    name: "ApolloBVM",
    components: {
        Navbar
    },

    data () {
        return {
            venti: require('@/assets/venti.png')
        }
    }   
}
</script>

<style scoped>

h1 {
    padding-top: 4rem;
    font-family: medium-content-title-font, Georgia, Cambria, "Times New Roman", Times, serif;
    font-size: 260%;
    text-align: left;
}

h4 {
    padding-top: 5px;
    padding-bottom: 5px;
    margin: 0;
    text-align: left;
    font-family: medium-content-title-font, Georgia, Cambria, "Times New Roman", Times, serif;
    font-size: 200%;
}
.venti {
    width: 15rem;
    height: auto;
}

figure {
    margin-bottom: 4%;
    font-style: italic;
}

p {
    text-align: left;
    font-size: 18px;
}
</style>