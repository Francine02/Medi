package com.me.backend.services;

import java.util.List;

import com.me.backend.dtos.MedicineDTO;

public interface MedicineService {
    MedicineDTO saveMedicine(MedicineDTO medicineDTO);
    List<MedicineDTO> getAllMedicines();
    MedicineDTO updateMedicine(Long id, MedicineDTO medicineDTO);
    void deleteMedicine(Long id);
}
