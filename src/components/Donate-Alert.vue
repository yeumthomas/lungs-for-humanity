<template>
    <div class="donate-alert">
        <h3 class="donate-text">Click <a id="donate-button" href="/donate">here</a> to donate towards funding the ApolloBVM ventilator!</h3>
    </div>
</template>

<script>

export default {
    name: "Donate-Alert"
    }
</script>

<style scoped>

.donate-alert {
    margin-top: 85px;
    max-width: 650px;
    background-color: #ffd7d7;
    border-radius: 10px;
    padding: 10px 0px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
}

#donate-button {
    color: #e06666;
}

#donate-button:hover {
    text-decoration: underline;
}

</style>