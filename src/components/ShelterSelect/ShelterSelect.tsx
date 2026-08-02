import styles from './ShelterSelect.module.scss';

export function ShelterSelect() {
	return (
		<div className={styles.field}>
			<label className={styles.label} htmlFor="shelterId">
				Útulok <span className={styles.optional}>(Nepovinné)</span>
			</label>
			<select className={styles.select} id="shelterId" name="shelterId" defaultValue="">
				<option value="" disabled>Vyberte útulok zo zoznamu</option>
				<option value="1">Útulok Bratislava</option>
				<option value="2">Útulok Košice</option>
			</select>
		</div>
	)
}
