<script>
	// @ts-nocheck

	import { onMount } from 'svelte';

	// @ts-nocheck

	import { placemarkService } from '../services/placemark-service';
	export let placemark;
	let message = '';

	function handleFileSelect() {
		const fileInput = document.querySelector('.file-input');
		fileInput.onchange = () => {
			if (fileInput.files.length > 0) {
				const fileName = document.querySelector('.file-name');
				fileName.textContent = fileInput.files[0].name;
			}
		};
	}

	async function uploadImage(placemarkid) {
		const fileInput = document.querySelector('.file-input');
		const imagefile = fileInput.files[0];

		if (!imagefile) {
			message = 'Please choose a file to upload.';
			return;
		}

		const success = await placemarkService.uploadImage(placemarkid, imagefile);
		if (!success) {
			message = 'Try again, there is an error';
			return;
		}
		location.reload();
	}

	async function deleteImage(placemarkid, img) {
		const success = await placemarkService.deleteImage(placemarkid, img);
		if (!success) {
			message = 'Try again, there is an error';
			return;
		}
		location.reload();
	}

	onMount(async () => {
		handleFileSelect();
	});
</script>

<div class="card">
	{#if placemark.img}
		<div class="card-image">
			<figure class="image is-256x256">
				<img src={placemark.img} alt="img" />
			</figure>
			<form on:submit|preventDefault={deleteImage(placemark._id, placemark.img)}>
				<button type="submit" class="button is-info">Delete</button>
			</form>
		</div>
	{/if}
	<div class="card-content">
		<form on:submit|preventDefault={uploadImage(placemark._id)} enctype="multipart/form-data">
			<div id="file-select" class="file has-name is-fullwidth">
				<label class="file-label">
					<input class="file-input" name="imagefile" type="file" accept="image/png, image/jpeg" />
					<span class="file-cta">
						<span class="file-icon">
							<i class="fas fa-upload" />
						</span>
						<span class="file-label"> Choose a file… </span>
					</span>
					<span class="file-name" />
				</label>
				<button type="submit" class="button is-info">Upload</button>
			</div>
		</form>
	</div>
</div>
