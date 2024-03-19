function input_Data(){
    let form = document.getElementById('form');
    let nama = form.nama.value;
    let jabatan = form.jabatan;
    let status = form.status;

    class HitungGaji {
        constructor(nama, jabatan, status) {
            this.nama = namal
            this.jabatan = jabatan;
            this.status = status;
        }

        menampilkan(){
            let gajiPokok;
            switch (this.jabatan) {
                case "Manager":
                    gajiPokok = 15000000;
                    break;
                case "HRD":
                    gajiPokok = 10000000;
                    break;
                case "Staff":
                    gajiPokok = 5000000;
                    break;
                default:
                    gajiPokok = 0;
            }
            let tunjanganJabatan = 0.15 * gajiPokok;
            let bpjs = 0.1 * gajiPokok;
            let tunjanganKeluarga = this.status === "Menikah" ? 0.2 * gajiPokok : 0;
            let totalGaji = gajiPokok + tunjanganJabatan + bpjs + tunjanganKeluarga;

            document.getElementById('total_hasil').innerHTML = `
            <tr>
                <td colspan="7">Total Gaji</td>
                <td>${totalGaji}</td>
            </tr>
            `
            document.getElementById('hasil_pegawai').innerHTML = `
            <tr>
                <td>${this.nama}</td>
                <td>${this.jabatan}</td>
                <td>${this.status}</td>
                <td>${gajiPokok}</td>
                <td>${tunjanganJabatan}</td>
                <td>${bpjs}</td>
                <td>${tunjanganKeluarga}</td>
                <td>${totalGaji}</td>
            </tr>
            `
            document.getElementById('show-result').style.opacity = '1';
        }
    }
    
    let Gaji = new HitungGaji(nama, jabatan, status);
    Gaji.menampilkan();
}

