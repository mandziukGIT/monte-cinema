<template>
    <header class="app-header">
        <div class="app-header__item">
            <router-link :to="{name: 'home'}">
                <img src="@/assets/images/logo.svg" alt="monterail logo"/>
            </router-link>
        </div>
        <div class="app-header__item desktop">
            <nav class="navbar">
                <router-link :to="{ name: 'movies' }" class="navbar__link">
                    Movies
                </router-link>
                <router-link :to="{ name: 'screenings' }" class="navbar__link">
                    Screenings
                </router-link>
                <router-link :to="{ name: 'contact' }" class="navbar__link">
                    Contact&nbsp;us
                </router-link>
            </nav>
            <div>
                <router-link :to="{ name:'register' }">
                    <base-button >Register</base-button>
                </router-link>
                <router-link :to="{ name:'login' }">
                    <base-button buttonType="primary">Login</base-button>
                </router-link>
                
            </div>
        </div> 
        <div class="app-header__item hamburger">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    $underline-indicator-gap: 10.85px;
    $nav-bottom-space: 2rem;
    
    .app-header {
        display: flex;
        margin-bottom: $nav-bottom-space;
        img {
            width: 100%;
            min-width: 150px;
            cursor: pointer;
        }
        @include md {
            justify-content: space-between;
        }
    }

    .navbar {
        display: flex;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 18px;
        color: $secondary-text-color;
        padding: 0 1rem 0 3rem;
        margin: 0 auto;
        @include md {
            padding: 0 0 0 2rem;
        }
        &__link {
            padding: 0 2vw;
            cursor: pointer;
            margin: auto 0;
            position: relative;
            &:after {
                content: '';
                position: absolute;
                bottom: calc(($nav-bottom-space + $underline-indicator-gap) * -1);
                left: 0; 
                height: 3px;
                width: 0;
                background-color: $color-cherry-red;
                @include expand-transition;
            }
            &:hover {
                color: $primary-text-color;
                
                &:after {
                    width: 100%;
                    @include expand-transition;
                }
            }
            
        }
    }
    .desktop {
        display: flex;
        flex: 1;
        justify-content: space-between;
        @include md {
            display: none;
        }
    }
    .hamburger {
        cursor: pointer;
        display: none;
        margin: auto 0;
        & > div {
            margin: 5px;
            height: 3px;
            width: 25px;
            background-color: $color-mid-gray;
            border-radius: 3px; 
        }
        @include md {
            display: block;
        }
    }
</style>