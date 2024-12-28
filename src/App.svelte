<script lang="ts">
    import { supabase } from './lib/supabaseClient'


    supabase.auth.signInWithOAuth({
        provider: 'google'
    })
</script>

<main>
    <form class="border p-4 w-[400px] bg-blue-100 flex flex-col space-y-2">
        <input type="text" name="title">
        <input type="date">
        <textarea id="markdown-editor" name="description" rows="15"></textarea>
    </form>
    <textarea id="markdown-editor"></textarea>

</main>

<style>

</style>
