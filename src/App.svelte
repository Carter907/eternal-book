<script lang="ts">
    import {supabase} from './lib/supabaseClient'
    import type {Entry} from "./lib/entry";
    import EntryView from './lib/EntryView.svelte'


    const onClick = () => {

        supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: 'http://localhost:5173',
            }
        })
    }
    const userF = supabase.auth.getUser()
    const entriesRequest = supabase.from('entries')
        .select('*');
    let showEntries = $state(false)
    let entries: Entry[] = $state([])

    let title = $state("")
    let date = $state("")
    let content = $state("")
</script>

<main class="p-10">
    <h1><strong>Signed in as:</strong>
        {#await supabase.auth.getUser()}
            loading...
        {:then user}
            {#if user.data.user}
                {user.data.user.email}
            {/if}

        {/await}
    </h1>
    <button onclick={onClick} class="border px-4 my-2 rounded">sign in</button>
    <div class="bg-gray-200 flex flex-col space-y-5 p-10 rounded-lg">
        <input type="text" name="title" class="w-fit p-2" bind:value={title}>
        <input type="date" class="w-fit p-2" bind:value={date}>
        <textarea id="markdown-editor" name="description" rows="15" class="p-2"
                  bind:value={content}></textarea>
        <button class="bg-white border px-4 w-fit self-end" onclick={async () => {
            console.log('clicked')
            const user = (await userF).data.user;
            if (!user) {
                console.log('no user')
                return
            }
            let record = {
                date: date,
                title: title,
                content: content,
                user_id: user.id,
            }
            const { data, error } = await supabase.from('entries')
            .insert([record])
            .select()
            console.log(data)
            if (error) throw error
            else console.log(`data inserted`)
        }}>insert
        </button>
    </div>


    <button class="px-4 border rounded my-2" onclick={async () => {
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
