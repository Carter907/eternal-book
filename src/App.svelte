<script lang="ts">
    import {supabase} from './lib/supabaseClient'
    import type {Entry} from "./lib/entry";
    import EntryView from './lib/EntryView.svelte'


    const onClick = () => {

        supabase.auth.signInWithOAuth({
            provider: 'google',
            // options: {
            //     redirectTo: 'http://localhost:5173',
            // }
        })
    }
    const entriesRequest = supabase.from('entries')
        .select('*');
    let showEntries = $state(false)
    let entries: Entry[] = $state([])

</script>

<main>
    <button onclick={onClick} class="border px-4 my-2 mx-4 rounded">sign in</button>
    <form class="border p-4 bg-gray-200 flex flex-col space-y-2">
        <input type="text" name="title" class="w-fit p-2">
        <input type="date" class="w-fit p-2">
        <textarea id="markdown-editor" name="description" rows="15" class="p-2"></textarea>
        <button class="bg-white border px-4 w-fit self-end">insert</button>
    </form>

    <button class="px-4 border rounded mx-4 my-2" onclick={async () => {
        showEntries = true
        const { data, error } = await supabase
        .from('entries')
        .select('*')
        if (data) {
            console.log(data)
            entries = data
        }
    }}>print entries
    </button>
    <section>
        {#each entries as entry}
            <EntryView {entry}/>
        {/each}
    </section>


</main>
