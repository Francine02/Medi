package com.me.backend.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.me.backend.dtos.MedicineDTO;
import com.me.backend.services.MedicineService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/medi")
public class MediController {
    private final MedicineService medicineService;

    @PostMapping("/create")
    public ResponseEntity<MedicineDTO> saveMedicine(@RequestBody MedicineDTO medicineDTO){
        MedicineDTO medicineSave = medicineService.saveMedicine(medicineDTO);
        return ResponseEntity.status(201).body(medicineSave);
    }

    @GetMapping("/all")
    public ResponseEntity <List<MedicineDTO>> getAllMedicines(){
        List<MedicineDTO> medicines = medicineService.getAllMedicines();
        return ResponseEntity.ok(medicines);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MedicineDTO> updateMedicine(@PathVariable Long id, @RequestBody MedicineDTO medicineDTO){
        MedicineDTO medicineUpdate = medicineService.updateMedicine(id, medicineDTO);
        return ResponseEntity.ok(medicineUpdate);     
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMedicine(@PathVariable Long id){
        medicineService.deleteMedicine(id);
        return ResponseEntity.noContent().build();
    }
}
