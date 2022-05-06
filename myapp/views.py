from django.shortcuts import render
from pdfminer import high_level
from myapp.models import addfile
import os
import re
import pandas as pd
import numpy as np
# Create your views here.
    
def index(request):
    return render(request, "index.html")

def output(request):
    return render(request, "output.html")

def uploadfile(request):
    if request.method == "POST":
        filemodel = addfile()
        filemodel.pdf = request.POST.get('myFile')
        if len(request.FILES) != 0:
            filemodel.pdf=request.FILES['myFile']

        filemodel.save()

        file = request.FILES["myFile"]
        file_name = str(file)

        local_pdf_filename = file
        pages = [] # just the first page

        extracted_text = high_level.extract_text("media/pdfs/"+file_name, "", pages)
        extracted_text=str(extracted_text)
        print(extracted_text)
        file_name_txt = file_name.replace(".pdf",".txt")

        open('media/txtfiles/'+file_name_txt, 'w', encoding='utf8')
        f = open('media/txtfiles/'+file_name_txt, 'a', encoding="utf8")

        for line in extracted_text:
            f.write(line)
        '''with open('media/txtfiles/'+file_name_txt,'r', encoding="utf8") as file:
            txtfilestr = file.read()'''
        
        #final.py
        file = open('media/txtfiles/'+file_name_txt, 'r' , encoding="utf8")
        s = extracted_text
        print(s)
        #os.remove('media/txtfiles/'+file_name_txt)
        # For Hemoglobin
        Hemoglobin = re.findall(r'Hemoglobin[0-9\.0-9]+', s)
        Hemoglobin=str(Hemoglobin)
        Hemoglobinstripped = re.findall(r'[0-9\.0-9]+', Hemoglobin)
        print("Hemoglobin = "+str(Hemoglobinstripped))

        #For RBC
        RBC = re.findall(r'RBC[0-9\.0-9]+', s)
        RBC=str(RBC)
        RBCstripped = re.findall(r'[0-9\.0-9]+', RBC)
        print("RBC = "+str(RBCstripped))

        #For HCT
        HCT = re.findall(r'HCT[0-9\.0-9]+', s)
        HCT=str(HCT)
        HCTstripped = re.findall(r'[0-9\.0-9]+', HCT)
        print("HCT = "+str(HCTstripped))

        #For MCV
        MCV = re.findall(r'MCV[0-9\.0-9]+', s)
        MCV=str(MCV)
        MCVstripped = re.findall(r'[0-9\.0-9]+', MCV)
        print("MCV = "+str(MCVstripped))

        #For MCH
        MCH = re.findall(r'MCH[0-9\.0-9]+', s)
        MCH=str(MCH)
        MCHstripped = re.findall(r'[0-9\.0-9]+', MCH)
        print("MCH = "+str(MCHstripped))

        #For MCHC
        MCHC = re.findall(r'MCHC[0-9\.0-9]+', s)
        MCHC=str(MCHC)
        MCHCstripped = re.findall(r'[0-9\.0-9]+', MCHC)
        print("MCHC = "+str(MCHCstripped))

        #For RDW-SD
        RDWSD = re.findall(r'RDW-SD[0-9\.0-9]+', s)
        RDWSD=str(RDWSD)
        RDWSDstripped = re.findall(r'[0-9\.0-9]+', RDWSD)
        print("RDW-SD = "+str(RDWSDstripped))

        #For RDW-CV
        RDWCV = re.findall(r'RDW-CV[0-9\.0-9]+', s)
        RDWCV=str(RDWCV)
        RDWCVstripped = re.findall(r'[0-9\.0-9]+', RDWCV)
        print("RDW-CV = "+str(RDWCVstripped))

        #For Total Leucocyte Count
        TotalLeucocyteCount = re.findall(r'Total Leucocyte Count[0-9\.0-9]+', s)
        TotalLeucocyteCount=str(TotalLeucocyteCount)
        TotalLeucocyteCountstripped = re.findall(r'[0-9\.0-9]+', TotalLeucocyteCount)
        print("Total Leucocyte Count = "+str(TotalLeucocyteCountstripped))

        #For Neutrophils
        Neutrophils = re.findall(r'Neutrophils[0-9\.0-9]+', s)
        Neutrophils=str(Neutrophils)
        Neutrophilsstripped = re.findall(r'[0-9\.0-9]+', Neutrophils)
        print("Neutrophils = "+str(Neutrophilsstripped))

        #For Lymphocytes
        Lymphocytes = re.findall(r'Lymphocytes[0-9\.0-9]+', s)
        Lymphocytes=str(Lymphocytes)
        Lymphocytesstripped = re.findall(r'[0-9\.0-9]+', Lymphocytes)
        print("Lymphocytes = "+str(Lymphocytesstripped))

        #For Monocytes
        Monocytes = re.findall(r'Monocytes[0-9\.0-9]+', s)
        Monocytes=str(Monocytes)
        Monocytesstripped = re.findall(r'[0-9\.0-9]+', Monocytes)
        print("Monocytes = "+str(Monocytesstripped))

        #For Eosinophils
        Eosinophils = re.findall(r'Eosinophils[0-9\.0-9]+', s)
        Eosinophils=str(Eosinophils)
        Eosinophilsstripped = re.findall(r'[0-9\.0-9]+', Eosinophils)
        print("Eosinophils = "+str(Eosinophilsstripped))

        #For Basophils
        Basophils = re.findall(r'Basophils[0-9\.0-9]+', s)
        Basophils=str(Basophils)
        Basophilsstripped = re.findall(r'[0-9\.0-9]+', Basophils)
        print("Basophils = "+str(Basophilsstripped))

        #For Absolute Neutrophil Count
        AbsoluteNeutrophilCount = re.findall(r'Absolute Neutrophil Count[0-9\.0-9]+', s)
        AbsoluteNeutrophilCount=str(AbsoluteNeutrophilCount)
        AbsoluteNeutrophilCountstripped = re.findall(r'[0-9\.0-9]+', AbsoluteNeutrophilCount)
        print("Absolute Neutrophil Count = "+str(AbsoluteNeutrophilCountstripped))

        #For Absolute Lymphocyte Count
        AbsoluteLymphocyteCount = re.findall(r'Absolute Lymphocyte Count[0-9\.0-9]+', s)
        AbsoluteLymphocyteCount=str(AbsoluteLymphocyteCount)
        AbsoluteLymphocyteCountstripped = re.findall(r'[0-9\.0-9]+', AbsoluteLymphocyteCount)
        print("Absolute Lymphocyte Count = "+str(AbsoluteLymphocyteCountstripped))

        #For Absolute Monocyte Count
        AbsoluteMonocyteCount = re.findall(r'Absolute Monocyte Count[0-9\.0-9]+', s)
        AbsoluteMonocyteCount=str(AbsoluteMonocyteCount)
        AbsoluteMonocyteCountstripped = re.findall(r'[0-9\.0-9]+', AbsoluteMonocyteCount)
        print("Absolute Monocyte Count = "+str(AbsoluteMonocyteCountstripped))

        #For Absolute Eosinophil Count
        AbsoluteEosinophilCount = re.findall(r'Absolute Eosinophil Count[0-9\.0-9]+', s)
        AbsoluteEosinophilCount=str(AbsoluteEosinophilCount)
        AbsoluteEosinophilCountstripped = re.findall(r'[0-9\.0-9]+', AbsoluteEosinophilCount)
        print("Absolute Eosinophil Count = "+str(AbsoluteEosinophilCountstripped))

        #For Absolute Basophil Count
        AbsoluteBasophilCount = re.findall(r'Absolute Basophil Count[0-9\.0-9]+', s)
        AbsoluteBasophilCount=str(AbsoluteBasophilCount)
        AbsoluteBasophilCountstripped = re.findall(r'[0-9\.0-9]+', AbsoluteBasophilCount)
        print("Absolute Basophil Count = "+str(AbsoluteBasophilCountstripped))

        #For Platelet Count
        PlateletCount = re.findall(r'Platelet Count[1-9][0-9][0-9]', s)
        PlateletCount=str(PlateletCount)
        PlateletCountstripped = re.findall(r'[1-9][0-9][0-9]', PlateletCount)
        print("Platelet Count = "+str(PlateletCountstripped))

        #For MPV
        MPV = re.findall(r'MPV[0-9\.0-9]+', s)
        MPV=str(MPV)
        MPVstripped = re.findall(r'[0-9\.0-9]+', MPV)
        print("MPV = "+str(MPVstripped))

        #For PDW
        PDW = re.findall(r'PDW[0-9\.0-9]+', s)
        PDW=str(PDW)
        PDWstripped = re.findall(r'[0-9\.0-9]+', PDW)
        print("PDW = "+str(PDWstripped))

        #For GlycosylatedHemoglobinHbA1c
        GlycosylatedHemoglobinHbA1c = re.findall(r'c\)[0-9\.0-9]+', s)
        GlycosylatedHemoglobinHbA1c=str(GlycosylatedHemoglobinHbA1c)
        GlycosylatedHemoglobinHbA1cstripped = re.findall(r'[0-9\.0-9]+', GlycosylatedHemoglobinHbA1c)
        print("Glycosylated Hemoglobin (HbA1c) = "+str(GlycosylatedHemoglobinHbA1cstripped))

        #For Glycosylated Hemoglobin (eAG)
        EstimatedaverageglucoseeAG = re.findall(r'\(eAG\)[0-9\.0-9]+', s)
        EstimatedaverageglucoseeAG=str(EstimatedaverageglucoseeAG)
        EstimatedaverageglucoseeAGstripped = re.findall(r'[0-9\.0-9]+', EstimatedaverageglucoseeAG)
        print("Estimated average glucose (eAG) = "+str(EstimatedaverageglucoseeAGstripped))


        #For Iron Serum
        IronSerum = re.findall(r'Iron Serum[0-9\.0-9]+', s)
        IronSerum=str(IronSerum)
        IronSerumstripped = re.findall(r'[0-9\.0-9]+', IronSerum)
        print("Iron Serum = "+str(IronSerumstripped))

        #For Absolute Basophil Count
        TotalIronBindingCapacityTIBC = re.findall(r'Total Iron Binding Capacity \( TIBC\)[0-9\.0-9]+', s)
        TotalIronBindingCapacityTIBC=str(TotalIronBindingCapacityTIBC)
        TotalIronBindingCapacityTIBCstripped = re.findall(r'[0-9\.0-9]+', TotalIronBindingCapacityTIBC)
        print("Total Iron Binding Capacity ( TIBC) = "+str(TotalIronBindingCapacityTIBCstripped))

        #For Transferrin Saturation
        TransferrinSaturation = re.findall(r'Transferrin Saturation[0-9\.0-9]+', s)
        TransferrinSaturation=str(TransferrinSaturation)
        TransferrinSaturationstripped = re.findall(r'[0-9\.0-9]+', TransferrinSaturation)
        print("Transferrin Saturation = "+str(TransferrinSaturationstripped))

        #For Unsaturated Iron Binding Capacity
        UnsaturatedIronBindingCapacity = re.findall(r'Unsaturated Iron Binding Capacity[0-9\.0-9]+', s)
        UnsaturatedIronBindingCapacity=str(UnsaturatedIronBindingCapacity)
        UnsaturatedIronBindingCapacitystripped = re.findall(r'[0-9\.0-9]+', UnsaturatedIronBindingCapacity)
        print("Unsaturated Iron Binding Capacity = "+str(UnsaturatedIronBindingCapacitystripped))

        #For Lipid ProfileCholesterol
        LipidProfileCholesterol = re.findall(r'Lipid ProfileCholesterol[0-9\.0-9]+', s)
        LipidProfileCholesterol=str(LipidProfileCholesterol)
        LipidProfileCholesterolstripped = re.findall(r'[0-9\.0-9]+', LipidProfileCholesterol)
        print("Lipid ProfileCholesterol = "+str(LipidProfileCholesterolstripped))

        #For Triglycerides
        Triglycerides = re.findall(r'Triglycerides[0-9\.0-9]+', s)
        Triglycerides=str(Triglycerides)
        Triglyceridesstripped = re.findall(r'[0-9\.0-9]+', Triglycerides)
        print("Triglycerides = "+str(Triglyceridesstripped))

        #For PhosphateOxidaseHDL Cholesterol
        PhosphateOxidaseHDLCholesterol = re.findall(r'PhosphateOxidaseHDL Cholesterol[0-9\.0-9]+', s)
        PhosphateOxidaseHDLCholesterol=str(PhosphateOxidaseHDLCholesterol)
        PhosphateOxidaseHDLCholesterolstripped = re.findall(r'[0-9\.0-9]+', PhosphateOxidaseHDLCholesterol)
        print("PhosphateOxidaseHDL Cholesterol = "+str(PhosphateOxidaseHDLCholesterolstripped))

        #For SelectiveDetergentLDL Cholesterol
        SelectiveDetergentLDLCholesterol = re.findall(r'SelectiveDetergentLDL Cholesterol[0-9\.0-9]+', s)
        SelectiveDetergentLDLCholesterol=str(SelectiveDetergentLDLCholesterol)
        SelectiveDetergentLDLCholesterolstripped = re.findall(r'[0-9\.0-9]+', SelectiveDetergentLDLCholesterol)
        print("SelectiveDetergentLDL Cholesterol = "+str(SelectiveDetergentLDLCholesterolstripped))

        #For VLDL Cholesterol
        VLDLCholesterol = re.findall(r'VLDL Cholesterol[0-9\.0-9]+', s)
        VLDLCholesterol=str(VLDLCholesterol)
        VLDLCholesterolstripped = re.findall(r'[0-9\.0-9]+', VLDLCholesterol)
        print("VLDL Cholesterol = "+str(VLDLCholesterolstripped))

        #For Cholesterol : HDL Cholesterol
        CholesterolHDLCholesterol = re.findall(r'Cholesterol \: HDL Cholesterol[0-9\.0-9]+', s)
        CholesterolHDLCholesterol=str(CholesterolHDLCholesterol)
        CholesterolHDLCholesterolstripped = re.findall(r'[0-9\.0-9]+', CholesterolHDLCholesterol)
        print("Cholesterol : HDL Cholesterol = "+str(CholesterolHDLCholesterolstripped))

        #For HDL/LDL Ratio
        HDLLDLRatio = re.findall(r'HDL\/LDL Ratio[0-9\.0-9]+', s)
        HDLLDLRatio=str(HDLLDLRatio)
        HDLLDLRatiostripped = re.findall(r'[0-9\.0-9]+', HDLLDLRatio)
        print("HDL/LDL Ratio = "+str(HDLLDLRatiostripped))

        #For LDLHDLRatio
        LDLHDLRatio = re.findall(r'LDL\/HDL Ratio[0-9\.0-9]+', s)
        LDLHDLRatio=str(LDLHDLRatio)
        LDLHDLRatiostripped = re.findall(r'[0-9\.0-9]+', LDLHDLRatio)
        print("LDL/HDL Ratio = "+str(LDLHDLRatiostripped))

        #For Non-HDL Cholesterol
        NonHDLCholesterol = re.findall(r'Non\-HDL Cholesterol[0-9\.0-9]+', s)
        NonHDLCholesterol=str(NonHDLCholesterol)
        NonHDLCholesterolstripped = re.findall(r'[0-9\.0-9]+', NonHDLCholesterol)
        print("Non-HDL Cholesterol = "+str(NonHDLCholesterolstripped))

        #For BilirubinTotal
        BilirubinTotal = re.findall(r'Bilirubin\-Total[0-9\.0-9]+', s)
        BilirubinTotal=str(BilirubinTotal)
        BilirubinTotalstripped = re.findall(r'[0-9\.0-9]+', BilirubinTotal)
        print("Bilirubin-Total = "+str(BilirubinTotalstripped))

        #For Bilirubin-Direct
        BilirubinDirect = re.findall(r'Bilirubin\-Direct[0-9\.0-9]+', s)
        BilirubinDirect=str(BilirubinDirect)
        BilirubinDirectstripped = re.findall(r'[0-9\.0-9]+', BilirubinDirect)
        print("Bilirubin-Direct = "+str(BilirubinDirectstripped))

        #For Bilirubin-Indirect
        BilirubinIndirect = re.findall(r'Bilirubin\-Indirect[0-9\.0-9]+', s)
        BilirubinIndirect=str(BilirubinIndirect)
        BilirubinIndirectstripped = re.findall(r'[0-9\.0-9]+', BilirubinIndirect)
        print("Bilirubin-Indirect = "+str(BilirubinIndirectstripped))

        #For Protein, Total
        ProteinTotal = re.findall(r'Protein\, Total[0-9\.0-9]+', s)
        ProteinTotal=str(ProteinTotal)
        ProteinTotalstripped = re.findall(r'[0-9\.0-9]+', ProteinTotal)
        print("Protein, Total = "+str(ProteinTotalstripped))

        #For Albumin
        Albumin = re.findall(r'Albumin[0-9\.0-9]+', s)
        Albumin=str(Albumin)
        Albuminstripped = re.findall(r'[0-9\.0-9]+', Albumin)
        print("Albumin = "+str(Albuminstripped))

        #For Globulin
        Globulin = re.findall(r'Globulin[0-9\.0-9]+', s)
        Globulin=str(Globulin)
        Globulinstripped = re.findall(r'[0-9\.0-9]+', Globulin)
        print("Globulin = "+str(Globulinstripped))

        #For A/G Ratio
        AGRatio = re.findall(r'A\/G Ratio[0-9\.0-9]+', s)
        AGRatio=str(AGRatio)
        AGRatiostripped = re.findall(r'[0-9\.0-9]+', AGRatio)
        print("A/G Ratio = "+str(AGRatiostripped))

        #For Aspartate Aminotransferase (SGOT)
        AspartateAminotransferaseSGOT = re.findall(r'Aspartate Aminotransferase \(SGOT\)[0-9\.0-9]+', s)
        AspartateAminotransferaseSGOT=str(AspartateAminotransferaseSGOT)
        AspartateAminotransferaseSGOTstripped = re.findall(r'[0-9\.0-9]+', AspartateAminotransferaseSGOT)
        print("Aspartate Aminotransferase (SGOT) = "+str(AspartateAminotransferaseSGOTstripped))

        #For Alanine Transaminase (SGPT)
        AlanineTransaminaseSGPT = re.findall(r'Alanine Transaminase \(SGPT\)[0-9\.0-9]+', s)
        AlanineTransaminaseSGPT=str(AlanineTransaminaseSGPT)
        AlanineTransaminaseSGPTstripped = re.findall(r'[0-9\.0-9]+', AlanineTransaminaseSGPT)
        print("Alanine Transaminase (SGPT) = "+str(AlanineTransaminaseSGPTstripped))

        #For SGOT/SGPT
        SGOTSGPT = re.findall(r'SGOT\/SGPT[0-9\.0-9]+', s)
        SGOTSGPT=str(SGOTSGPT)
        SGOTSGPTstripped = re.findall(r'[0-9\.0-9]+', SGOTSGPT)
        print("SGOT/SGPT = "+str(SGOTSGPTstripped))

        #For Alkaline Phosphatase
        AlkalinePhosphatase = re.findall(r'Alkaline Phosphatase[0-9\.0-9]+', s)
        AlkalinePhosphatase=str(AlkalinePhosphatase)
        AlkalinePhosphatasestripped = re.findall(r'[0-9\.0-9]+', AlkalinePhosphatase)
        print("Alkaline Phosphatase = "+str(AlkalinePhosphatasestripped))

        #For Gamma Glutamyltransferase (GGT)
        GammaGlutamyltransferaseGGT = re.findall(r'Gamma Glutamyltransferase \(GGT\)[0-9\.0-9]+', s)
        GammaGlutamyltransferaseGGT=str(GammaGlutamyltransferaseGGT)
        GammaGlutamyltransferaseGGTstripped = re.findall(r'[0-9\.0-9]+', GammaGlutamyltransferaseGGT)
        print("Gamma Glutamyltransferase (GGT) = "+str(GammaGlutamyltransferaseGGTstripped))

        #For Blood Urea Nitrogen
        BloodUreaNitrogen = re.findall(r'Blood Urea Nitrogen[0-9\.0-9]+', s)
        BloodUreaNitrogen=str(BloodUreaNitrogen)
        BloodUreaNitrogenstripped = re.findall(r'[0-9\.0-9]+', BloodUreaNitrogen)
        print("Blood Urea Nitrogen = "+str(BloodUreaNitrogenstripped))

        #For Urea
        Urea = re.findall(r'Urea[0-9\.0-9]+', s)
        Urea=str(Urea)
        Ureastripped = re.findall(r'[0-9\.0-9]+', Urea)
        print("Urea = "+str(Ureastripped))

        #For Creatinine
        Creatinine = re.findall(r'Creatinine[0-9\.0-9]+', s)
        Creatinine=str(Creatinine)
        Creatininestripped = re.findall(r'[0-9\.0-9]+', Creatinine)
        print("Creatinine = "+str(Creatininestripped))

        #For BUN/Creatinine Ratio
        BUNCreatinineRatio = re.findall(r'BUN/Creatinine Ratio[0-9\.0-9]+', s)
        BUNCreatinineRatio=str(BUNCreatinineRatio)
        BUNCreatinineRatiostripped = re.findall(r'[0-9\.0-9]+', BUNCreatinineRatio)
        print("BUN/Creatinine Ratio = "+str(BUNCreatinineRatiostripped))

        #For Calcium
        Calcium = re.findall(r'Calcium[0-9\.0-9]+', s)
        Calcium=str(Calcium)
        Calciumstripped = re.findall(r'[0-9\.0-9]+', Calcium)
        print("Calcium = "+str(Calciumstripped))

        #For Uric Acid
        UricAcid = re.findall(r'Uric Acid[0-9\.0-9]+', s)
        UricAcid=str(UricAcid)
        UricAcidstripped = re.findall(r'[0-9\.0-9]+', UricAcid)
        print("Uric Acid = "+str(UricAcidstripped))

        #For Glomerular Filtration Rate
        GlomerularFiltrationRate = re.findall(r'Glomerular Filtration Rate[0-9\.0-9]+', s)
        GlomerularFiltrationRate=str(GlomerularFiltrationRate)
        GlomerularFiltrationRatestripped = re.findall(r'[0-9\.0-9]+', GlomerularFiltrationRate)
        print("Glomerular Filtration Rate = "+str(GlomerularFiltrationRatestripped))

        #For T3, Total
        T3Total = re.findall(r'T3\, Total[0-9\.0-9]+', s)
        T3Total=str(T3Total)
        T3Totalstripped = re.findall(r'[0-9\.0-9]+', T3Total)
        print("T3, Total = "+str(T3Totalstripped))

        #For T4, Total
        T4Total = re.findall(r'T4\, Total[0-9\.0-9]+', s)
        T4Total=str(T4Total)
        T4Totalstripped = re.findall(r'[0-9\.0-9]+', T4Total)
        print("T4, Total = "+str(T4Totalstripped))

        #For Thyroid Stimulating Hormone - Ultra Sensitive
        ThyroidStimulatingHormoneUltraSensitive = re.findall(r'Thyroid Stimulating Hormone - UltraSensitive[0-9\.0-9]+', s)
        ThyroidStimulatingHormoneUltraSensitive=str(ThyroidStimulatingHormoneUltraSensitive)
        ThyroidStimulatingHormoneUltraSensitivestripped = re.findall(r'[0-9\.0-9]+', ThyroidStimulatingHormoneUltraSensitive)
        print("Thyroid Stimulating Hormone - UltraSensitive = "+str(ThyroidStimulatingHormoneUltraSensitivestripped))

        #For Name :
        Name= re.findall(r'Name\: [A-Za-z\.A-Z ]+', s)
        Name=str(Name)
        Namestripped = re.findall(r'[a-zA-Z]+', Name)
        Namestripped = str(Namestripped)
        Namestripped=Namestripped.replace("Order","")
        Namestripped=Namestripped.replace("'","")
        Namestripped=Namestripped.replace(",","")
        Namestripped=Namestripped.replace("Name","")
        Namestripped=Namestripped.replace("[","")
        Namestripped=Namestripped.replace("]","")

        Namestripped = Namestripped.partition('ID')[0]
        print("Name : = "+str(Namestripped))

        list=['Hemoglobinstripped','RBCstripped','HCTstripped','MCVstripped','MCHstripped','MCHCstripped','RDWSDstripped','RDWCVstripped','TotalLeucocyteCountstripped','Neutrophilsstripped','Lymphocytesstripped','Monocytesstripped','Eosinophilsstripped','Basophilsstripped','AbsoluteNeutrophilCountstripped','AbsoluteLymphocyteCountstripped','AbsoluteMonocyteCountstripped','AbsoluteEosinophilCountstripped','AbsoluteBasophilCountstripped','PlateletCountstripped','MPVstripped','PDWstripped','GlycosylatedHemoglobinHbA1cstripped','EstimatedaverageglucoseeAGstripped','IronSerumstripped','TotalIronBindingCapacityTIBCstripped','TransferrinSaturationstripped','UnsaturatedIronBindingCapacitystripped','LipidProfileCholesterolstripped','Triglyceridesstripped','PhosphateOxidaseHDLCholesterolstripped','SelectiveDetergentLDLCholesterolstripped','VLDLCholesterolstripped','CholesterolHDLCholesterolstripped','HDLLDLRatiostripped','LDLHDLRatiostripped','NonHDLCholesterolstripped','BilirubinTotalstripped','BilirubinDirectstripped','BilirubinIndirectstripped','ProteinTotalstripped','Albuminstripped','Globulinstripped','AGRatiostripped','AspartateAminotransferaseSGOTstripped','AlanineTransaminaseSGPTstripped','SGOTSGPTstripped','AlkalinePhosphatasestripped','GammaGlutamyltransferaseGGTstripped','BloodUreaNitrogenstripped','Ureastripped','Creatininestripped','BUNCreatinineRatiostripped','Calciumstripped','UricAcidstripped','GlomerularFiltrationRatestripped','T3Totalstripped','T4Totalstripped','ThyroidStimulatingHormoneUltraSensitivestripped']

        liststripped = [Hemoglobinstripped, RBCstripped, HCTstripped, MCVstripped, MCHstripped, MCHCstripped, RDWSDstripped, RDWCVstripped, TotalLeucocyteCountstripped, Neutrophilsstripped, Lymphocytesstripped, Monocytesstripped, Eosinophilsstripped, Basophilsstripped, AbsoluteNeutrophilCountstripped, AbsoluteLymphocyteCountstripped, AbsoluteMonocyteCountstripped, AbsoluteEosinophilCountstripped, AbsoluteBasophilCountstripped, PlateletCountstripped, MPVstripped, PDWstripped, GlycosylatedHemoglobinHbA1cstripped, EstimatedaverageglucoseeAGstripped, IronSerumstripped, TotalIronBindingCapacityTIBCstripped, TransferrinSaturationstripped, UnsaturatedIronBindingCapacitystripped, LipidProfileCholesterolstripped, Triglyceridesstripped, PhosphateOxidaseHDLCholesterolstripped, SelectiveDetergentLDLCholesterolstripped, VLDLCholesterolstripped, CholesterolHDLCholesterolstripped, HDLLDLRatiostripped, LDLHDLRatiostripped, NonHDLCholesterolstripped, BilirubinTotalstripped, BilirubinDirectstripped, BilirubinIndirectstripped, ProteinTotalstripped, Albuminstripped, Globulinstripped, AGRatiostripped, AspartateAminotransferaseSGOTstripped, AlanineTransaminaseSGPTstripped, SGOTSGPTstripped, AlkalinePhosphatasestripped, GammaGlutamyltransferaseGGTstripped, BloodUreaNitrogenstripped, Ureastripped, Creatininestripped, BUNCreatinineRatiostripped, Calciumstripped, UricAcidstripped, GlomerularFiltrationRatestripped, T3Totalstripped, T4Totalstripped, ThyroidStimulatingHormoneUltraSensitivestripped]


        df=[]
        for test in liststripped:
            print(test)
            test = str(test)
            test = test.replace("'","")
            test = test.replace("[","")
            test = test.replace("]","")
            try :
                if test[1] == ",":
                   test = test[3:]
            except:
                pass
            test=float(test)
            test="{:.2f}".format(test)
            print(test)
            df.append(test)

        #second2.py

        abz = pd.DataFrame({'Name':[str(Namestripped)],
                    'Hemoglobin':[df[0]],
                    'RBC':[df[1]],
                    'HCT':[df[2]],
                    'MCV':[df[3]],
                    'MCH':[df[4]],
                    'MCHC':[df[5]],
                    'RDWSD':[df[6]],
                    'RDWCV':[df[7]],
                    'TotalLeucocyteCount':[df[8]],
                    'Neutrophils':[df[9]],
                    'Lymphocytes':[df[10]],
                    'Monocytes':[df[11]],
                    'Eosinophils':[df[12]],
                    'Basophils':[df[13]],
                    'AbsoluteNeutrophilCount':[df[14]],
                    'AbsoluteLymphocyteCount':[df[15]],
                    'AbsoluteMonocyteCount':[df[16]],
                    'AbsoluteEosinophilCount':[df[17]],
                    'AbsoluteBasophilCount':[df[18]],
                    'PlateletCount':[df[19]],
                    'MPV':[df[20]],
                    'PDW':[df[21]],
                    'GlycosylatedHemoglobinHbA1c':[df[22]],
                    'EstimatedaverageglucoseeAG':[df[23]],
                    'IronSerum':[df[24]],
                    'TotalIronBindingCapacityTIBC':[df[25]],
                    'TransferrinSaturation':[df[26]],
                    'UnsaturatedIronBindingCapacity':[df[27]],
                    'Cholesterol':[df[28]],
                    'Triglycerides':[df[29]],
                    'HDLCholesterol':[df[30]],
                    'LDLCholesterol':[df[31]],
                    'VLDLCholesterol':[df[32]],
                    'Cholesterol/HDLCholesterol':[df[33]],
                    'HDL/LDLRatio':[df[34]],
                    'LDL/HDLRatio':[df[35]],
                    'Non-HDLCholesterol':[df[36]],
                    'BilirubinTotal':[df[37]],
                    'BilirubinDirect':[df[38]],
                    'BilirubinIndirect':[df[39]],
                    'ProteinTotal':[df[40]],
                    'Albumin':[df[41]],
                    'Globulin':[df[42]],
                    'AGRatio':[df[43]],
                    'AspartateAminotransferaseSGOT':[df[44]],
                    'AlanineTransaminaseSGPT':[df[45]],
                    'SGOT/SGPT':[df[46]],
                    'AlkalinePhosphatase':[df[47]],
                    'GammaGlutamyltransferaseGGT':[df[48]],
                    'BloodUreaNitrogen':[df[49]],
                    'Urea':[df[50]],
                    'Creatinine':[df[51]],
                    'BUN/CreatinineRatio':[df[52]],
                    'Calcium':[df[53]],
                    'UricAcid':[df[54]],
                    'GlomerularFiltrationRate':[df[55]],
                    'T3Total':[df[56]],
                    'T4Total':[df[57]],
                    'ThyroidStimulatingHormoneUltraSensitive':[df[58]]})
        abz.to_csv('media/txtfiles/out.csv',index=False)

        #abz.to_csv('out6.csv', mode='a', index=False, header=False)
        print("\nData Added Successfully!")

        #prediction_calculation.py

        df = pd.read_csv("media/txtfiles/out.csv")
        df.head(20)

        symptom=['Hemoglobin',
                'RBC',
                'HCT',
                'MCV',
                'MCH',
                'MCHC',
                'RDWSD',
                'RDWCV',
                'TotalLeucocyteCount',
                'Neutrophils',
                'Lymphocytes',
                'Monocytes',
                'Eosinophils',
                'Basophils',
                'AbsoluteNeutrophilCount',
                'AbsoluteLymphocyteCount',
                'AbsoluteMonocyteCount',
                'AbsoluteEosinophilCount',
                'AbsoluteBasophilCount',
                'PlateletCount',
                'MPV',
                'PDW',
                'GlycosylatedHemoglobinHbA1c',
                'EstimatedaverageglucoseeAG',
                'IronSerum',
                'TotalIronBindingCapacityTIBC',
                'TransferrinSaturation',
                'UnsaturatedIronBindingCapacity',
                'Cholesterol',
                'Triglycerides',
                'HDLCholesterol',
                'LDLCholesterol',
                'VLDLCholesterol',
                'Cholesterol/HDLCholesterol',
                'HDL/LDLRatio',
                'LDL/HDLRatio',
                'Non-HDLCholesterol',
                'BilirubinTotal',
                'BilirubinDirect',
                'BilirubinIndirect',
                'ProteinTotal',
                'Albumin',
                'Globulin',
                'AGRatio',
                'AspartateAminotransferaseSGOT',
                'AlanineTransaminaseSGPT',
                'SGOT/SGPT',
                'AlkalinePhosphatase',
                'GammaGlutamyltransferaseGGT',
                'BloodUreaNitrogen',
                'Urea',
                'Creatinine',
                'BUN/CreatinineRatio',
                'Calcium',
                'UricAcid',
                'GlomerularFiltrationRate',
                'T3Total',
                'T4Total',
                'ThyroidStimulatingHormoneUltraSensitive']

        low = ['13.0','4.5','40.0','83.0','27.0','31.5','39.0','11.5','4.0','40.0','20.0','2.0','1.0','0.0','2.0','1.0','0.2','0.02','0.02','150.0','6.5','6.5','4.0','70.0','65.0','134.0','16.0','69.0','100.0','0.0','40.0','0.0','10.0','1.0','0.30','1.0','0.0','0.2','0.0','0.1','6.0','3.2','1.8','1.1','5.0','5.0','0.70','44.0','12.0','8.4','17.97','0.72','10.0','8.8','3.5','90.0','0.35','4.87','0.35']

        high = ['17.0','5.5','50.0','101.0','32.0','34.5','46.0','14.0','10.0','80.0','40.0','10.0','6.0','2.0','7.0','3.0','1.0','0.5','0.1','410.0','12.0','12.0','5.6','126.0','175.0','415.0','50.0','240.0','240.0','200.0','60.0','160.0','30.0','5.0','0.50','2.0','160.0','1.2','0.5','1.0','8.1','4.6','3.6','2.5','34.0','55.0','2.0','147.0','64.0','25.7','54.99','1.25','20.0','10.0','7.2','120.0','1.93','11.72','4.94']

        unit = ['g/dL','mili/cu.mm','%','fl','pg','g/dL','fl','%','10^3/μI','%','%','%','%','%','10^3/μI','10^3/μI','10^3/μI','10^3/μI','10^3/μI','10^3/μI','fl','fL','%','mg/dL','μg/dL','μg/dL','%','μg/dl','mg/dL','mg/dL','mg/dL','mg/dl','mg/dl','Ratio','Ratio','Ratio','mg/dl','mg/dL','mg/dL','mg/dL','g/dL','g/dL','g/dl','Ratio','U/L','U/L','Ratio','U/L','U/L','mg/dL','mg/dL','mg/dL','Ratio','mg/dL','mg/dL','mL/min/1.73m2','ng/mL','μg/dL','μIU/mL']

        name = ""

        location = str(df.index[df['Name'].str.contains(name)].tolist())
        location = location.replace("[","")
        location = location.replace("]","")
        location = int(location)
        location

        #open('media/txtfiles/output.txt', 'w' , encoding="utf8")
        outputlist = []

        mydict = {"result":[],"actualvalue":[],"limit":[]}
        with open('media/txtfiles/output.txt', 'w' , encoding="utf8") as outputfile:
            for i in range(0,59):
                Given_data = float(df[[str(symptom[i])]].iloc[location])
                #Hemoglobinstripped = 18.0
                Given_data = float(Given_data)#str(symptom[i]).replace("stripped","")+" is Low. "+"yours is "+str(Given_data)+" "+unit[i]+" required is "+str(low[i])+"-"+str(high[i])+" "+unit[i]
                if Given_data > float(high[i]):
                    #outputfile.write(str(symptom[i]).replace("stripped","")+" is high by "+str("{:.2f}".format(Given_data-float(high[i])))+" "+unit[i]+" units"+" required is "+str(low[i])+"-"+str(high[i])+" "+unit[i]+" units And yours is "+str(Given_data)+" "+unit[i]+" units which is "+str("{:.2f}".format((Given_data-float(high[i]))/float(high[i])*100))+"% Higher than required \n\n")
                    outputfile.write(str(symptom[i]).replace("stripped","")+" is High. "+"yours is "+str(Given_data)+". "+unit[i]+". required is "+str(low[i])+" - "+str(high[i])+" "+unit[i])                    
                    mydict["result"].append(str(symptom[i]).replace("stripped","")+" is High. ")
                    mydict["actualvalue"].append(str(Given_data))
                    mydict["limit"].append(str(low[i])+"-"+str(high[i])+" "+unit[i])
                    #outputlist.append(str(symptom[i]).replace("stripped","")+" is high by "+str("{:.2f}".format(Given_data-float(high[i])))+" "+unit[i]+" units"+" required is "+str(low[i])+"-"+str(high[i])+" "+unit[i]+" units And yours is "+str(Given_data)+" "+unit[i]+" units which is "+str("{:.2f}".format((Given_data-float(high[i]))/float(high[i])*100))+"% Higher than required \n\n")                
                    outputlist.append(str(symptom[i]).replace("stripped","")+" is High. "+"yours is "+str(Given_data)+". "+unit[i]+". required is "+str(low[i])+" - "+str(high[i])+" "+unit[i])
                elif Given_data < float(low[i]):
                    #outputfile.write(str(symptom[i]).replace("stripped","")+" is low by "+str("{:.2f}".format((float(low[i])-Given_data)))+" "+unit[i]+" units"+" required is "+str(low[i])+"-"+str(high[i])+" "+unit[i]+" units And yours is "+str(Given_data)+" "+unit[i]+" units which is "+str("{:.2f}".format((float(low[i])-Given_data)/float(low[i])*100))+"% Lower than required \n\n")
                    outputfile.write(str(symptom[i]).replace("stripped","")+" is Low. "+"yours is "+str(Given_data)+" "+unit[i]+". required is "+str(low[i])+" - "+str(high[i])+" "+unit[i])
                    mydict["result"].append(str(symptom[i]).replace("stripped","")+" is Low. ")
                    mydict["actualvalue"].append(str(Given_data))
                    mydict["limit"].append(str(low[i])+"-"+str(high[i])+" "+unit[i])
                    #outputlist.append(str(symptom[i]).replace("stripped","")+" is low by "+str("{:.2f}".format((float(low[i])-Given_data)))+" "+unit[i]+" units"+" required is "+str(low[i])+"-"+str(high[i])+" "+unit[i]+" units And yours is "+str(Given_data)+" "+unit[i]+" units which is "+str("{:.2f}".format((float(low[i])-Given_data)/float(low[i])*100))+"% Lower than required \n\n")
                    outputlist.append(str(symptom[i]).replace("stripped","")+" is Low. "+"yours is "+str(Given_data)+" "+unit[i]+". required is "+str(low[i])+" - "+str(high[i])+" "+unit[i])
                '''else:
                    outputfile.write(str(symptom[i]).replace("stripped","")+" is normal \n\n")
                    outputlist.append(str(symptom[i]).replace("stripped","")+" is normal \n\n")'''
                print("\n")
        with open('media/txtfiles/output.txt','r', encoding="utf8") as input_file:
            text = input_file.readlines()
        print(text)
        #outputfile = str(outputfile)
        file_name_txt = file_name.replace(".pdf",".txt")
        os.remove("media/pdfs/"+file_name)

        #os.remove("media/txtfiles/"+file_name_txt)
        return render(request, "output.html", { "something" : True, "file_name" : file_name, "txt" :  outputlist})

        

