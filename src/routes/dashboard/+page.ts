import type { PageLoad } from "./$types";
import { PUBLIC_SUPABASE_KEY, PUBLIC_SUPABASE_URL } from "$env/static/public";
import { createClient } from "@supabase/supabase-js";

export const load: PageLoad = async () => {
	const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY);

	const { data, error } = await supabase.storage
		.from("files")
		.list("", { sortBy: { column: "created_at", order: "desc" } });

	if (data) {
		return { supabase, data };
	} else {
		console.log(error);
	}
};