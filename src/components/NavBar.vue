<template>
    <div class="nav">
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
            <li>
                <router-link to="/contact">Contact</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'user', params: { id: 5 }}">User</router-link>
            </li>
        </ul>
    </div>
</template>

<style>
    html,
    body {
        margin: 0px !important;
        padding: 0px !important;
    }

    .nav {
        text-align: center;
    }

    .nav a {
        display: block;
        font-weight: bold;
        color: #2c3e50;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    .nav a.router-link-exact-active {
        color: #3ba776;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #b3b3b3;
    }

    li {
        float: left;
    }

    li a:hover {
        background-color: #646464;
    }

    .nav-right {
        text-align: end !important;
    }
</style>