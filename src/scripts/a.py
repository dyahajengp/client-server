def angka_ibu(ayah):
    ibu = ayah*1
    return ibu

def angka_ayah():
    ayah = 1
    return ayah

def angka_anak(ayah, ibu):
    anak = ayah+ibu
    return anak

def total_keluarga(ayah, ibu, anak):
    total = ayah+ibu+anak
    return total

def main():
    ayah = angka_ayah()
    ibu = angka_ibu(ayah)
    anak = angka_anak(ayah, ibu)
    total = total_keluarga(ayah, ibu, anak)
    print(total)

if __name__=='__main__':
    main()