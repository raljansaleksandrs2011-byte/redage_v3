<script>
    import { translateText } from 'lang'
    import './main.sass'    
    export let popupData;

    const statuses = [
        {
            code: "kick",
            status: "You were kicked",
            text: "You were kicked by Administrator. You can appeal the kick on the project discord complains.",
            button: "Обжаловать"
        },
        {
            code: "ban",
            status: "You are banned",
            text: "You were banned by Administrator. Intil 21.22.2019. Reason: ...",
            button: "Appeal"
        },
        {
            code: "restart",
            status: "Server restart",
            text: "The server is currently being restarted. Please wait 5 minutes for the server to start.",
            button: "Get in line"
        }
    ]

    let currentStatus = 0;
</script>

<div id="mainpopup" class="{popupData.Type}">
    <div class="mainpopup__back hud__icon-warning"></div>
    <div class="mainpopup__main {popupData.Type}">
        <div class="mainpopup__smallback hud__icon-warning"></div>
        <div class="popup__title {popupData.Type}">{popupData.Title}</div>
        <div class="popup__subtitle">{popupData.Text}</div>
        {#if false}
        <div class="box-between">
            <div class="popup__button big {popupData.Type}">{statuses[currentStatus].button}</div>
            <div class="popup__button red">{translateText('popups', 'Назад')}</div>
        </div>
        {/if}
    </div>
</div>